class Message {

  constructor() {
    this.numberWord = 0
    this.sumSelect = ""
  }

  onBindEvent() {
    this.textNumber = $(".text-number .number")
    this.previewMessage = $(".preview-message")
    this.countWords = $("textarea")
    this.addInput = $(".word-input")
    this.textNumber = $(".text-number .number")

    this.countWords.keyup(this.onUpdateCount)
    this.addInput.change(this.onChangeInput)
  }

  onUpdateCount() {
    this.textNumber = $(".text-number .number")
    this.previewMessage = $(".preview-message")
    this.countWords = $("textarea")
    this.numberWord = $(this).val().length

    if (this.numberWord <= 2000) {
      this.textNumber.text(this.numberWord) //add number words
      this.previewMessage.html(`<p>${$(this).val()}</p>`) //preview string on div preview
      let text = this.countWords.val()
      let match = /\r|\n/.exec(text)
      if (match) {
        // check new line when compose message
        let arrayText = this.countWords.val().split("\n")
        $(".preview-message p:first").remove()
        arrayText.forEach((value, index) => {
          this.previewMessage.append(`<p>${value}</p>`)
        })
      }
    }
  }

  onChangeInput() {
    this.sumSelect = $(".word-input").toArray()
    this.countWords = $("textarea")
    this.previewMessage = $(".preview-message")
    this.textNumber = $(".text-number .number")
    this.enough = false
    this.val = ""

    $.each(this.sumSelect, (index, value) => {
      if ($(value).val() !== '') {
        this.enough = true
        this.val = $(value).val()
      }
    })

    if (this.enough) {

      let start = this.countWords.prop("selectionStart")
      let end = this.countWords.prop("selectionEnd")
      let text = this.countWords.val()
      let before = text.substring(0, start)
      let after = text.substring(end, text.length)

      this.countWords.val(before + this.val + after)

      this.previewMessage.html(`<p>${before + this.val + after}</p>`)
      let match = /\r|\n/.exec(text)
      if (match) {
        // check new line when compose message
        let arrayText = this.countWords.val().split("\n")
        $(".preview-message p:first").remove()
        arrayText.forEach((value, index) => {
          this.previewMessage.append(`<p>${value}</p>`)
        })
      }

      this.countWords[0].selectionStart = this.countWords[0].selectionEnd = start + this.val.length
      this.countWords.focus()

      if (before.length + this.val.length + after.length <= 2000) {
        this.textNumber.text(before.length + this.val.length + after.length)
      }
    }
  }

}

export default Message