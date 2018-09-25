/*
* Create module Message that using for message.html
*/
class Message {
  /* Create constructor */
  constructor() {
    /* Declare variable */
    this.numberWord = 0
    this.sumSelect = ""
    window.textNumber = $(".text-number .number")
    window.previewMessage = $(".preview-message")
    window.countWords = $("textarea")
    window.addInput = $(".word-input")
    window.textNumber = $(".text-number .number")
    /* Run function onBindEvent */
    this.onBindEvent()
  }

  onBindEvent() {
    window.countWords.on("keyup", this.onUpdateCount) // Keyup event which using for count words in string
    window.addInput.on("change", this.onChangeInput) // onChange event which using for select word input option
  }

  onUpdateCount() {
    this.numberWord = $(this).val().length

    if (this.numberWord <= 2000) {
      window.textNumber.text(this.numberWord) // Add number words
      window.previewMessage.html(`<p>${$(this).val()}</p>`) // Preview string on div preview
      Message.onAddMessageWithNewline()
    }
  }

  onChangeInput() {
    this.sumSelect = $(".word-input").toArray()
    this.enough = false
    this.val = ""

    $.each(this.sumSelect, (index, value) => {
      if ($(value).val() !== '') {
        this.enough = true
        this.val = $(value).val()
      }
    })

    if (this.enough) {

      let start = window.countWords.prop("selectionStart")
      let end = window.countWords.prop("selectionEnd")
      let text = window.countWords.val()
      let before = text.substring(0, start)
      let after = text.substring(end, text.length)

      window.countWords.val(before + this.val + after)

      window.previewMessage.html(`<p>${before + this.val + after}</p>`)
      Message.onAddMessageWithNewline()

      window.countWords[0].selectionStart = window.countWords[0].selectionEnd = start + this.val.length
      window.countWords.focus()

      if (before.length + this.val.length + after.length <= 2000) {
        window.textNumber.text(before.length + this.val.length + after.length)
      }
    }
  }

  static onAddMessageWithNewline() {
    let text = window.countWords.val()
    let match = /\r|\n/.exec(text)
    if (match) {
      // Check if exist new line when compose message
      let arrayText = window.countWords.val().split("\n")
      $(".preview-message p:first").remove()
      arrayText.forEach((value, index) => {
        window.previewMessage.append(`<p>${value}</p>`)
      })
    }
  }

}

/*
* Export module Message that using for message.html
*/
export default Message