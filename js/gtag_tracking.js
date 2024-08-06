//Ajout d'un événement onclick "Ajouter au panier" pour WooCommerce
(function() { // Fonction qui s'appelle elle-même pour être certain d'être en scope local
	
		document.addEventListener('DOMContentLoaded', function() { //On s'assure que le DOM est bien chargé
	
			let addToCart = { //On ajoute les types de boutons sous forme d'objets
								cssQuerySettings: [
													'.button.product_type_simple.add_to_cart_button.ajax_add_to_cart',
													'.single_add_to_cart_button.button.alt'
												  ],
								label: 'Add to Cart'
							};
							
			const currentPath = window.location.pathname; //On récupère le slug de la page courante
							
			const buttonTypes = [ addToCart ]; //On met les objets dans un tableau
			
			if (buttonTypes.length > 0) { //On vérifie que le tableau n'est pas vide
			
				for ( const type of buttonTypes ) { //on boucle sur les éléments du tableau
				
					if ( typeof type === "object" ) { //on vérifie que ce sont des objets
					
						for ( const setting of type.cssQuerySettings ) { //On boucle sur les queries CSS
						
							let buttonsCollection = document.querySelectorAll(setting); //On met les nodes dans une variable
							
							for ( const button of buttonsCollection ) { //On boucle sur les nodes
							
								//On ajoute l'attribut onclick qui va envoyer les infos à la balise GTAG
								button.setAttribute("onclick", "gtag(\'event\', \'CTA Custom Tracking\', {\'event_type\': \'clic\', \'button_type\' : '" + type.label + " from : " + currentPath + "'});");
							
							}
						
						}
						
					}
								
				}
				
			} else { 
				
				return;
			
			}
		
		});
	
	})();
