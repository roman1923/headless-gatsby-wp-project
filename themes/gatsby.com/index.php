<?php
/**
 * The main template file
 */

get_header(); ?>

<main id="primary" class="site-main">
    <?php if (have_posts()) : ?>
        <div class="posts-container">
            <?php while (have_posts()) : the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <header class="entry-header">
                        <?php
                        if (is_singular()) :
                            the_title('<h1 class="entry-title">', '</h1>');
                        else :
                            the_title('<h2 class="entry-title"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h2>');
                        endif;
                        ?>
                    </header>

                    <?php if (has_post_thumbnail()) : ?>
                        <div class="post-thumbnail">
                            <?php the_post_thumbnail(); ?>
                        </div>
                    <?php endif; ?>

                    <div class="entry-content">
                        <?php
                        if (is_singular()) :
                            the_content();
                        else :
                            the_excerpt();
                        endif;
                        ?>
                    </div>

                    <?php if (get_post_type() == 'developer') : ?>
                        <div class="developer-info">
                            <?php
                            $full_name = get_field('full_name');
                            $location = get_field('location');
                            $tech_stack = get_field('tech_stack');
                            $rating = get_field('rating');
                            $avatar = get_field('avatar');
                            ?>

                            <?php if ($avatar) : ?>
                                <div class="developer-avatar">
                                    <img src="<?php echo esc_url($avatar['sizes']['medium']); ?>" alt="<?php echo esc_attr($full_name); ?>">
                                </div>
                            <?php endif; ?>

                            <?php if ($full_name) : ?>
                                <h3>Full Name: <?php echo esc_html($full_name); ?></h3>
                            <?php endif; ?>

                            <?php if ($location) : ?>
                                <p><strong>Location:</strong> <?php echo esc_html($location); ?></p>
                            <?php endif; ?>

                            <?php if ($rating) : ?>
                                <p><strong>Rating:</strong> <?php echo esc_html($rating); ?>/10</p>
                            <?php endif; ?>

                            <?php if ($tech_stack) : ?>
                                <div class="tech-stack">
                                    <h4>Tech Stack:</h4>
                                    <ul>
                                        <?php foreach ($tech_stack as $tech) : ?>
                                            <li>
                                                <?php echo esc_html($tech['technology']); ?>
                                                <?php if ($tech['skill_level']) : ?>
                                                    <span class="skill-level">(<?php echo esc_html(ucfirst($tech['skill_level'])); ?>)</span>
                                                <?php endif; ?>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                </div>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>
                </article>
            <?php endwhile; ?>

            <?php
            the_posts_navigation(array(
                'prev_text' => __('Older posts', 'gatsby'),
                'next_text' => __('Newer posts', 'gatsby'),
            ));
            ?>
        </div>
    <?php else : ?>
        <section class="no-results not-found">
            <header class="page-header">
                <h1 class="page-title"><?php esc_html_e('Nothing here', 'gatsby'); ?></h1>
            </header>
            <div class="page-content">
                <p><?php esc_html_e('It looks like nothing was found at this location.', 'gatsby'); ?></p>
            </div>
        </section>
    <?php endif; ?>
</main>

<?php
get_sidebar();
get_footer();