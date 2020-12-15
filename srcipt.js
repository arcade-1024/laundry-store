const questionRows = document.querySelectorAll(".questions-text");
console.log(questionRows);
questionRows.forEach((qRow) => {
	qRow.addEventListener("click", () => {
		let ansDiv = qRow.nextElementSibling;
		ansDiv.classList.toggle("show");
		qRow.classList.toggle("activated");
	});
});
