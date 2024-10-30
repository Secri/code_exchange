<?php
  function addAnalyticsTag() {
  	if ( ! is_user_logged_in() ) { // ! est l'opérateur de négation
  	?>
  		<!-- Google tag (gtag.js) -->
  		<script async src="https://www.googletagmanager.com/gtag/js?id=G-CP1ZCWCM84"></script>
  		<script>
  			window.dataLayer = window.dataLayer || [];
  			function gtag(){dataLayer.push(arguments);}
  			gtag('js', new Date());
  			
  			gtag('config', 'G-CP1ZCWCM84');
  		</script>
  		<!-- End Google tag -->
  	<?php
  	}
  }
  add_action( 'wp_head', 'addAnalyticsTag', 10); // On exécute sur le hook wp_head()
