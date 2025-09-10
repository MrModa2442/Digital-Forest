// translations.ts

// Implemented translations object to provide text for the application.
export const translations = {
  en: {
    // Splash
    digital_forest: 'Digital Forest',
    splash_creator_credit: 'by Mohammadreza Nosrati Amirabadi',

    // Auth
    auth_header: 'Enter your name to start your forest.',
    first_name_placeholder: 'First Name',
    last_name_placeholder: 'Last Name',
    auth_button: 'Start Growing',
    auth_error: 'Please enter both your first and last name.',

    // Settings
    welcome_message: 'Welcome, {{name}}!',
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
    sign_out_button: 'Sign Out',
    toggle_theme: 'Toggle theme',

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

    // Forest
    my_forest: 'My Forest',
    forest_back_button: 'Back',
    forest_empty_header: 'Your forest is empty.',
    forest_empty_message: 'Start a focus session to plant your first tree.',
    planted_on_date: '{{treeName}} planted on {{date}}',
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
