<?php
/**
 * The template for displaying the header
 *
 * This is the template that displays all of the <head> section, opens the <body> tag and adds the site's header.
 *
 * @package ElementsKit_Lite
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$enable_skip_link = apply_filters( 'elementskit_enable_skip_link', true );
$skip_link_url = apply_filters( 'elementskit_skip_link_url', '#content' );
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="msvalidate.01" content="749C3853DFE8CA5697D84B7714BA8D5D" />
	<meta name="google-site-verification" content="IO1HxUgZHVz1o7825OKmXZQ_8thaMc5cf0rPfMeFApE" />


	<?php if (! current_theme_supports('title-tag')) : ?>
		<title>
			<?php echo esc_html(wp_get_document_title()); ?>
		</title>
	
	<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "w8h2ug88bn");
</script>


	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W88V6Z4Q');</script>
<!-- Google End Tag Manager -->
	
	


	<?php endif; ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W88V6Z4Q"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
	
	
	<?php wp_body_open(); ?>

	<?php if ($enable_skip_link) { ?>
		<a class="skip-link screen-reader-text" href="<?php echo esc_url($skip_link_url); ?>">
			<?php echo esc_html__('Skip to content', 'elementskit-lite'); ?>
		</a>
	<?php } ?>

	<?php do_action('elementskit/template/before_header'); ?>

	<div class="ekit-template-content-markup ekit-template-content-header ekit-template-content-theme-support">
		<?php
		$template = \ElementsKit_Lite\Modules\Header_Footer\Activator::template_ids();
		echo \ElementsKit_Lite\Utils::render_elementor_content($template[0]); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped --  Displaying with Elementor content rendering
		?>
	</div>

	<?php do_action('elementskit/template/after_header'); ?>