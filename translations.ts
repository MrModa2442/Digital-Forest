// translations.ts

// Implemented translations object to provide text for the application.
export const translations = {
  en: {
    // Splash
    digital_forest: 'Digital Forest',
    splash_creator_credit: 'by Mohammadreza Nosrati Amirabadi',

    // FIX: Add missing translation keys for AuthScreen.
    // Auth
    auth_header: 'Please enter your name to create your personalized forest.',
    first_name_placeholder: 'First Name',
    last_name_placeholder: 'Last Name',
    auth_button: 'Enter My Forest',
    auth_error: 'Please enter both your first and last name.',

    // Settings
    welcome_message: 'Welcome to Your Forest',
    your_coins: 'Your Coins:',
    select_tree: 'Select a Tree',
    select_duration: 'Select Focus Duration',
    minute_one: '{{count}} Minute',
    minutes_other: '{{count}} Minutes',
    start_button: 'Start Focusing',
    view_forest_button: 'My Forest',
    buy_button: 'Buy for {{price}} coins',
    owned_label: 'Owned',
    not_enough_coins: 'Not enough coins!',
    guide_button: 'How to Play',
    preset_label: 'Preset',
    slider_label: 'Slider',
    toggle_theme: 'Toggle theme',
    select_tag_label: 'Select a Tag',
    tag_work: 'Work',
    tag_study: 'Study',
    tag_creative: 'Creative',
    tag_other: 'Other',
    my_profile_button: 'My Profile',

    // Timer
    give_up_button: 'Give Up',
    motivational_quotes: [
      "The journey of a thousand miles begins with a single step.",
      "The best time to plant a tree was 20 years ago. The second best time is now.",
      "Believe you can and you're halfway there.",
      "Focus on being productive instead of busy.",
      "The secret of getting ahead is getting started."
    ],

    // Completion
    completion_header: 'Well Done!',
    completion_message: 'You focused for {{duration}} minutes and grew a beautiful tree.',
    coins_earned_one: 'You earned {{count}} coin!',
    coins_earned_other: 'You earned {{count}} coins!',
    focus_again_button: 'Focus Again',
    view_forest_label: 'View My Forest',
    streak_message: 'You\'re on a {{count}}-day streak! 🔥',
    bonus_coins_message: '+{{count}} bonus coins',
    achievement_unlocked: 'Achievement Unlocked!',

    // Forest
    my_forest: 'My Forest',
    forest_back_button: 'Back',
    forest_empty_header: 'Your forest is empty.',
    forest_empty_message: 'Start a focus session to plant your first tree.',
    planted_on_date: '{{treeName}} planted on {{date}}',
    planted_on_date_with_tag: '{{treeName}} ({{tag}}) planted on {{date}}',
    tree_alt_text: 'A {{treeName}}, stage {{stage}} of growth.',

    // Guide
    guide_title: 'How It Works',
    guide_step_1_title: '1. Set Your Focus',
    guide_step_1_desc: 'Choose a tree to plant and set a timer. The longer you focus, the more coins you earn.',
    guide_step_2_title: '2. Stay Focused',
    guide_step_2_desc: 'While the timer is running, your tree will grow. If you leave or cancel, the tree will wither.',
    guide_step_3_title: '3. Grow Your Forest',
    guide_step_3_desc: 'Successfully completing a session adds the tree to your personal forest and earns you coins.',
    guide_step_4_title: '4. Unlock New Trees',
    guide_step_4_desc: 'Use your coins to unlock new and exotic trees to diversify your digital ecosystem.',
    guide_close_button: 'Got It!',

    // Profile & Achievements
    profile_title: 'My Profile',
    profile_back_button: 'Back',
    stats_title: 'My Stats',
    trees_planted: 'Trees Planted',
    withered_trees: 'Withered Trees',
    total_focused: 'Total Time Focused',
    current_streak: 'Current Streak',
    achievements_title: 'My Achievements',
    
    // Achievement Names & Descriptions
    ach_first_tree_name: 'First Root',
    ach_first_tree_desc: 'Plant your very first tree.',
    ach_sapling_grower_name: 'Sapling Grower',
    ach_sapling_grower_desc: 'Successfully plant 10 trees.',
    ach_forest_builder_name: 'Forest Builder',
    ach_forest_builder_desc: 'Successfully plant 50 trees.',
    ach_focused_hour_name: 'Hour of Power',
    ach_focused_hour_desc: 'Accumulate 60 minutes of focus time.',
    ach_marathon_session_name: 'Marathoner',
    ach_marathon_session_desc: 'Complete a single focus session of 90 minutes or more.',
    ach_collector_name: 'Collector',
    ach_collector_desc: 'Unlock 5 different tree species.',
    ach_arboretum_master_name: 'Arboretum Master',
    ach_arboretum_master_desc: 'Unlock all available tree species.',
    ach_week_streak_name: 'Consistent Growth',
    ach_week_streak_desc: 'Maintain a 7-day focus streak.',

    // Achievement Goal Labels
    ach_goal_1_tree: '1 Tree',
    ach_goal_10_trees: '10 Trees',
    ach_goal_50_trees: '50 Trees',
    ach_goal_1_hour: '1 Hour Total',
    ach_goal_90_min_session: '90 Min Session',
    ach_goal_5_species: '5 Species',
    ach_goal_all_species: 'All Species',
    ach_goal_7_day_streak: '7 Day Streak',

    // Tree names
    tree_oak: 'Oak',
    tree_pine: 'Pine',
    tree_sakura: 'Sakura',
    tree_willow: 'Willow',
    tree_maple: 'Maple',
    tree_baobab: 'Baobab',
    tree_redwood: 'Redwood',
    tree_jacaranda: 'Jacaranda',
    tree_joshua: 'Joshua Tree',
    tree_palm: 'Palm Tree',
    tree_magnolia: 'Magnolia',
    tree_spruce: 'Spruce',
    tree_ginkgo: 'Ginkgo',
    tree_acacia: 'Acacia',
    tree_cypress: 'Cypress',
    tree_birch: 'Birch',
    tree_bonsai: 'Bonsai',
    tree_sequoia: 'Sequoia',
    tree_rainbow_eucalyptus: 'Rainbow Eucalyptus',
  },
};