/*:
 * @target MZ
 * @plugindesc Global typewriter speed + per-line control with \ts[n]. Works in MV & MZ. 
 * @author You
 *
 * @param DefaultSpeed
 * @text Text Speed (frames/char)
 * @type number
 * @min 0
 * @desc Frames waited after each printed character. 0 = default fast. Try 2–4 for typewriter feel.
 * @default 2
 */
(() => {
  const params = PluginManager.parameters("TypewriterSpeed");
  const DEFAULT_SPEED = Number(params["DefaultSpeed"] || 2);

  // This holds the speed currently in effect while rendering a message
  let currentSpeed = DEFAULT_SPEED;

  // Reset per message (each Show Text)
  const _startMessage = Window_Message.prototype.startMessage;
  Window_Message.prototype.startMessage = function() {
    currentSpeed = DEFAULT_SPEED;
    _startMessage.call(this);
  };

  // Handle \ts[n] DURING RENDER (this is the key fix)
  const _processEscapeCharacter = Window_Message.prototype.processEscapeCharacter;
  Window_Message.prototype.processEscapeCharacter = function(code, textState) {
    if (code === "TS") {                   // \ts[n] in text
      const n = this.obtainEscapeParam(textState);
      if (!isNaN(n)) currentSpeed = Number(n);
      return;                              // don't draw anything for the tag itself
    }
    _processEscapeCharacter.call(this, code, textState);
  };

  // Wait after each character (respect fast-forward and instant sections)
  const _processNormalCharacter = Window_Message.prototype.processNormalCharacter;
  Window_Message.prototype.processNormalCharacter = function(textState) {
    _processNormalCharacter.call(this, textState);
    if (!this._showFast && !this._lineShowFast && currentSpeed > 0) {
      this.startWait(currentSpeed);
    }
  };
})();
