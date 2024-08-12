<?php
      
      function loadGtagEvents() {
		
		    wp_enqueue_script( 'add_gtag_event', get_stylesheet_directory_uri() . '/js/gtag_tracking.js' ); //On va chercher le script js
	
	    }
	
      if ( ! is_user_logged_in() ) { //Si l'internaute n'est pas connecté à l'interface d'administration
		
	      add_action( 'wp_enqueue_scripts', 'loadGtagEvents', 99); //On hook wp_enqueue_scripts et on met une priorité basse
		
      }
