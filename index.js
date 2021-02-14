#! /usr/bin/env node

const { Input } = require('enquirer')

function calcBirthday (num) {
  if (isNaN(num)) {
    return console.log('数字を入力してください')
  }
  num = num - 225
  console.log('ピピっ！あなたの誕生日が分かりました！')
  if (String(num).length === 4) {
    const birthMonth = String(num).substr(0, 2)
    const birthDay = String(num).substr(2, 3)
    console.log(`あなたの誕生日は${birthMonth}月${birthDay}日ではありませんか？`)
  } else {
    const birthMonth = String(num).substr(0, 1)
    const birthDay = String(num).substr(1, 2)
    console.log(`あなたの誕生日は${birthMonth}月${birthDay}日ではありませんか？`)
  }
}

async function exec () {
  const QuestionUserName = new Input({
    message: 'ユーザーネームを入力してください'
  })
  const question1 = new Input({
    message: ' あなたの生まれた月を、４倍してください(こちらにメモをどうぞ)'
  })
  const question2 = new Input({
    message: 'さらにそれに9足してください(こちらにメモをどうぞ)'
  })
  const question3 = new Input({
    message: 'さらにそれを25倍してくださいください(こちらにメモをどうぞ)'
  })
  const question4 = new Input({
    message: 'さらにそれに生まれた日を足してください(こちらにメモをどうぞ)'
  })

  const userName = await QuestionUserName.run()
  console.log(`こんにちは、${userName}さん。あなたの誕生日を当てましょう!!`)

  const answer1 = await question1.run()
  console.log(answer1)

  const answer2 = await question2.run()
  console.log(answer2)

  const answer3 = await question3.run()
  console.log(answer3)

  const answer4 = await question4.run()
  console.log(answer4)
  calcBirthday(answer4)
}

exec()
