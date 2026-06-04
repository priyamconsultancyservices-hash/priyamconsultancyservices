<?php
/*
Plugin Name: Codevyne SEO Meta Keywords
* Description: Add wordpress website page, post and product SEO meta keywords to speedup your website google search engine visibility.
* Contributors: pradeepku041,codevyne
*  Author: Codevyne Creatives
*  Author URI: https://www.codevyne.com/contact-us/
* Donate link: https://www.paypal.com/paypalme/pradeepku041/
* Tested up to: 6.7.2
* Stable tag: 1.4
* Version: 1.4
* Text Domain: wpcc-seo-meta-keywords
* Copyright: (c) 2021-2024 Codevyne Creatives PVT LTD.
*/

function wpcc_seo_metakeywords_metadata() {


	if(is_singular('post')){
	    global $post;
	   $meta_key="wpcc_seo_meta_keywords";
    $postMetaKeywords='';
    $meta_value = sanitize_text_field(get_post_meta( $post->ID, $meta_key, true ));
    
     if ( $meta_value && $meta_value !='' ){
         $postMetaKeywords=$meta_value;
     }
	?>
	    <meta name="keywords" content="<?php echo esc_html($postMetaKeywords);?>">
	<?php }
	?>
	
	<?php
	if(is_singular('page')){
	    global $post;
	   $meta_key="wpcc_seo_meta_keywords";
    $pageMetaKeywords='';
    $meta_value = sanitize_text_field(get_post_meta( $post->ID, $meta_key, true ));
    
     if ( $meta_value && $meta_value !='' ){
         $pageMetaKeywords=$meta_value;
     }
	?>
	    <meta name="keywords" content="<?php echo esc_html($pageMetaKeywords);?>">
	<?php }
	?>
	
	<?php
	if(is_singular('product')){
	    global $post;
	   $meta_key="wpcc_seo_meta_keywords";
    $pageMetaKeywords='';
    $meta_value = sanitize_text_field(get_post_meta( $post->ID, $meta_key, true ));
    
     if ( $meta_value && $meta_value !='' ){
         $pageMetaKeywords=$meta_value;
     }
	?>
	    <meta name="keywords" content="<?php echo esc_html($pageMetaKeywords);?>">
	<?php }
	?>

  <?php

}
add_action( 'wp_head', 'wpcc_seo_metakeywords_metadata',1);

function wpcc_seo_keyword_meta_box_markup($object)
{
    wp_nonce_field(basename(__FILE__), "meta-box-nonce");

    ?>
        <div>
            <label for="meta-box-text">Enter Your (,) Commas Saperated Keywords</label>
            <p>&nbsp;</p>
            <input name="wpcc_seo_meta_keywords" type="text" value="<?php echo esc_html(get_post_meta($object->ID, "wpcc_seo_meta_keywords", true)); ?>" style="width:100%;">

        </div>
    <?php  
}


function add_wpcc_seo_meta_box()
{
    add_meta_box("metakeyword-meta-box", "SEO Meta Keywords", "wpcc_seo_keyword_meta_box_markup", array('page','post','product'), "advanced", "high", null);
}

add_action("add_meta_boxes", "add_wpcc_seo_meta_box");


function save_wpcc_seo_meta_box($post_id, $post, $update)
{
    if (!isset($_POST["meta-box-nonce"]) || !wp_verify_nonce($_POST["meta-box-nonce"], basename(__FILE__)))
        return $post_id;

    if(!current_user_can("edit_post", $post_id))
        return $post_id;

    if(defined("DOING_AUTOSAVE") && DOING_AUTOSAVE)
        return $post_id;

    $slug = array('page','post','product');
    if(!in_array($post->post_type,$slug)){
        return $post_id;
}else{
    $meta_box_text_value = "";
$meta_key="wpcc_seo_meta_keywords";

    if(isset($_POST["wpcc_seo_meta_keywords"]))
    {
         $meta_box_text_value = sanitize_text_field($_POST["wpcc_seo_meta_keywords"]);
      
    }   
    
    $meta_value = sanitize_text_field(get_post_meta( $post_id, $meta_key, true ));

  if ( $meta_box_text_value && '' == $meta_value )
    add_post_meta( $post_id, $meta_key, $meta_box_text_value, true );

  elseif ( $meta_box_text_value && $meta_box_text_value != $meta_value )
    update_post_meta( $post_id, $meta_key, $meta_box_text_value );

  elseif (''== $meta_box_text_value && $meta_value )
    delete_post_meta( $post_id, $meta_key, $meta_value );
}
    
}

add_action("save_post", "save_wpcc_seo_meta_box", 10, 3);
?>