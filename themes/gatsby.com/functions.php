<?php
/**
 * Theme Functions
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'gatsby'),
    ));
}
add_action('after_setup_theme', 'theme_setup');

/**
 * Enqueue scripts and styles
 */
function theme_scripts() {
    wp_enqueue_style('theme-style', get_stylesheet_uri());
    wp_enqueue_script('theme-script', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'theme_scripts');

/**
 * Register Custom Post Type: Developer
 */
function register_developer_cpt() {
    $labels = array(
        'name'                  => _x('Developers', 'Post Type General Name', 'gatsby'),
        'singular_name'         => _x('Developer', 'Post Type Singular Name', 'gatsby'),
        'menu_name'             => __('Developers', 'gatsby'),
        'name_admin_bar'        => __('Developer', 'gatsby'),
        'archives'              => __('Developer Archives', 'gatsby'),
        'attributes'            => __('Developer Attributes', 'gatsby'),
        'parent_item_colon'     => __('Parent Developer:', 'gatsby'),
        'all_items'             => __('All Developers', 'gatsby'),
        'add_new_item'          => __('Add New Developer', 'gatsby'),
        'add_new'               => __('Add New', 'gatsby'),
        'new_item'              => __('New Developer', 'gatsby'),
        'edit_item'             => __('Edit Developer', 'gatsby'),
        'update_item'           => __('Update Developer', 'gatsby'),
        'view_item'             => __('View Developer', 'gatsby'),
        'view_items'            => __('View Developers', 'gatsby'),
        'search_items'          => __('Search Developer', 'gatsby'),
        'not_found'             => __('Not found', 'gatsby'),
        'not_found_in_trash'    => __('Not found in Trash', 'gatsby'),
        'featured_image'        => __('Featured Image', 'gatsby'),
        'set_featured_image'    => __('Set featured image', 'gatsby'),
        'remove_featured_image' => __('Remove featured image', 'gatsby'),
        'use_featured_image'    => __('Use as featured image', 'gatsby'),
        'insert_into_item'      => __('Insert into developer', 'gatsby'),
        'uploaded_to_this_item' => __('Uploaded to this developer', 'gatsby'),
        'items_list'            => __('Developers list', 'gatsby'),
        'items_list_navigation' => __('Developers list navigation', 'gatsby'),
        'filter_items_list'     => __('Filter developers list', 'gatsby'),
    );

    $args = array(
        'label'                 => __('Developer', 'gatsby'),
        'description'           => __('Developer profiles', 'gatsby'),
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'thumbnail', 'excerpt', 'revisions'),
        'taxonomies'            => array(),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 20,
        'menu_icon'             => 'dashicons-admin-users',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
        'rest_base'             => 'developers',
        'rest_controller_class' => 'WP_REST_Posts_Controller',
        'show_in_graphql'       => true,
        'graphql_single_name'   => 'Developer',
        'graphql_plural_name'   => 'Developers',
        'rewrite'               => array('slug' => 'developer'),
    );

    register_post_type('developer', $args);
}
add_action('init', 'register_developer_cpt', 0);

/**
 * Register ACF Fields for Developer CPT
 */
function register_developer_acf_fields() {
    // Check if ACF is active
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    acf_add_local_field_group(array(
        'key' => 'group_developer_info',
        'title' => 'Developer Info',
        'fields' => array(
            array(
                'key' => 'field_developer_full_name',
                'label' => 'Full Name',
                'name' => 'full_name',
                'type' => 'text',
                'instructions' => 'Enter the developer\'s full name',
                'required' => 1,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '50',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => 'John Doe',
                'prepend' => '',
                'append' => '',
                'maxlength' => '',
            ),
            array(
                'key' => 'field_developer_location',
                'label' => 'Location',
                'name' => 'location',
                'type' => 'text',
                'instructions' => 'Enter the developer\'s location',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '50',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => 'New York, USA',
                'prepend' => '',
                'append' => '',
                'maxlength' => '',
            ),
            array(
                'key' => 'field_developer_tech_stack',
                'label' => 'Tech Stack',
                'name' => 'tech_stack',
                'type' => 'repeater',
                'instructions' => 'Add technologies the developer works with',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'collapsed' => '',
                'min' => 0,
                'max' => 0,
                'layout' => 'table',
                'button_label' => 'Add Technology',
                'sub_fields' => array(
                    array(
                        'key' => 'field_tech_name',
                        'label' => 'Technology',
                        'name' => 'technology',
                        'type' => 'text',
                        'instructions' => '',
                        'required' => 1,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '60',
                            'class' => '',
                            'id' => '',
                        ),
                        'default_value' => '',
                        'placeholder' => 'PHP, JavaScript, React, etc.',
                        'prepend' => '',
                        'append' => '',
                        'maxlength' => '',
                    ),
                    array(
                        'key' => 'field_tech_level',
                        'label' => 'Skill Level',
                        'name' => 'skill_level',
                        'type' => 'select',
                        'instructions' => '',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '40',
                            'class' => '',
                            'id' => '',
                        ),
                        'choices' => array(
                            'beginner' => 'Beginner',
                            'intermediate' => 'Intermediate',
                            'advanced' => 'Advanced',
                            'expert' => 'Expert',
                        ),
                        'default_value' => 'intermediate',
                        'allow_null' => 0,
                        'multiple' => 0,
                        'ui' => 0,
                        'return_format' => 'value',
                        'ajax' => 0,
                        'placeholder' => '',
                    ),
                ),
            ),
            array(
                'key' => 'field_developer_rating',
                'label' => 'Rating',
                'name' => 'rating',
                'type' => 'number',
                'instructions' => 'Developer rating (1-10)',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '30',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => 5,
                'placeholder' => '',
                'prepend' => '',
                'append' => '/10',
                'min' => 1,
                'max' => 10,
                'step' => 0.1,
            ),
            array(
                'key' => 'field_developer_avatar',
                'label' => 'Avatar',
                'name' => 'avatar',
                'type' => 'image',
                'instructions' => 'Upload developer\'s avatar image',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '70',
                    'class' => '',
                    'id' => '',
                ),
                'return_format' => 'array',
                'preview_size' => 'medium',
                'library' => 'all',
                'min_width' => '',
                'min_height' => '',
                'min_size' => '',
                'max_width' => '',
                'max_height' => '',
                'max_size' => '',
                'mime_types' => 'jpg,jpeg,png,gif,webp',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'developer',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
        'show_in_rest' => 1,
        'show_in_graphql' => 1,
        'graphql_field_name' => 'developerInfo',
    ));
}
add_action('acf/init', 'register_developer_acf_fields');

/**
 * Flush rewrite rules on theme activation
 */
function theme_activation() {
    register_developer_cpt();
    flush_rewrite_rules();
}
register_activation_hook(__FILE__, 'theme_activation');

/**
 * Flush rewrite rules on theme deactivation
 */
function theme_deactivation() {
    flush_rewrite_rules();
}
register_deactivation_hook(__FILE__, 'theme_deactivation');