	function afficher(id_div) {
		$(id_div).toggle();
	}
	function verification() {
						var mail=$(email).val();
						var tel=$(telef).val();
						validation_email(mail);
						validation_tel(tel);
					  }
	function validation_email(email) {
						if (email.includes("@")==false) 
						  window.alert("Erreur adresse email");
					  }
	function validation_tel(telef) {
						if(telef.length<10)
						window.alert("Erreur Téléphone");
					  }
