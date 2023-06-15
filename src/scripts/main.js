window.addEventListener('load', function() {
	const scrollElem = document.querySelectorAll('[data-href]');

	for (let i = 0; i < scrollElem.length; i++) {
		scrollElem[i].addEventListener('click', function () {
			console.log(this);
			window.location.hash = '#' + this.dataset.href;
			const element = document.querySelector(`#${this.dataset.href}`);
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest"
			});
		});
	}

	const likes = document.querySelectorAll('.like');
	for (let i = 0; i < likes.length; i++) {
		likes[i].addEventListener('click', function() {
			if (this.classList.contains('like--down')) {
				this.classList.remove('like--down');
				this.innerText = --this.innerText;
			} else {
				this.classList.add('like--down');
				this.innerText = ++this.innerText;

				if (this.parentNode.querySelector('.dislike--down')) {
					this.parentNode.querySelector('.dislike--down').classList.toggle('dislike--down')
				}
			}
		});
	}

	const dislikes = document.querySelectorAll('.dislike');
	for (let i = 0; i < dislikes.length; i++) {
		dislikes[i].addEventListener('click', function() {
			this.classList.toggle('dislike--down');
			if (this.parentNode.querySelector('.like--down')) {
				if (this.parentNode.querySelector('.like--down')) {
					this.parentNode.querySelector('.like--down').innerText = --this.parentNode.querySelector('.like--down').innerText;

					this.parentNode.querySelector('.like--down').classList.toggle('like--down');
				}

			}
		});
	}
});
function dtime(num) {
	const date = new Date();

	date.setDate(date.getDate() + num);
	var options = {
		month: 'long',
		day: 'numeric',
	};
	document.write(date.toLocaleString("en-US", options));
}
