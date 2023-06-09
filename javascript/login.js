document
	.getElementById("loginForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		const email = document.querySelector("#email").value;
		const password = document.querySelector("#password").value;

		fetch("http://localhost:3000/auth/jwt/sign", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		})
			.then((response) => {
				if (response.status === 200) {
					return response.json();
				} else {
					alert("Falsches Passwort!");
				}
			})
			.then((response) => {
				sessionStorage.setItem("Key", response.token);
				window.location.href = "/public/index.html";
			});
	});
