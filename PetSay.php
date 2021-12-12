<?php

/**
 * Plugin Name: Pet Say
 * Plugin URI:  https://github.com/tasynguyen3894/petsay
 * Description: Show your pet's message
 * Version:     0.1.0
 * Author:      Sang "Tasy" Nguyen
 * Author URI:  https://sangnguyen.dev
 * License:     MIT License
 **/


if( ! function_exists( 'register_pet_say_block' ) ) {
    function register_pet_say_block() {
        $assets = include(plugin_dir_path(__FILE__) . 'build/main.asset.php');
        $script_url =  plugin_dir_url(__FILE__) .'build/main.js';
        $handle = 'pet-say-block-js';
        wp_register_script(
            $handle,
            $script_url,
            $assets['dependencies'],
            $assets['version'],
            true
        );

        register_block_type(
            'petsay/block', [
                'editor_script' => $handle
            ]
        );
    }

    add_action( 'init', 'register_pet_say_block' );
}
