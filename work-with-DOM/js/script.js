
	var gen = {
		title: "Тест по программированию",
		questions: ["Вопрос №1","Вопрос №2","Вопрос №3"],
		answers : [["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
		["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
		["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3",]],

		gen_question : function(title) {
			var div = document.createElement('h1');
				div.innerHTML = title;
				document.body.appendChild(div);

		},

		r : function check() {
			var q = this.questions.length;
			var answ, ul, li, p, chk, textElem ;
			for (var i = 0; i < q; i++) {
				p = document.createElement('p');
				p.innerHTML = this.questions[i];
				document.body.appendChild(p);
				ul = document.createElement('ul');
				p.appendChild(ul);

				answ = this.answers[i].length;

				for (var j = 0; j < answ; j++) {

						li = document.createElement('li');
						li.className = 'noneDecoration'
						chk = document.createElement ('input');
						chk.type = "checkbox";
						ul.appendChild(li);
						li.appendChild(chk);
						textElem = document.createTextNode(this.answers[i][j]);
						li.appendChild(textElem);

				}
			}
			var btn = document.createElement('BUTTON');
			var t = document.createTextNode("Проверить результат");
			btn.appendChild(t);
			document.body.appendChild(btn);
		}

	}

	gen.gen_question("Тест по программированию");
	console.log(gen);
	gen.r();
