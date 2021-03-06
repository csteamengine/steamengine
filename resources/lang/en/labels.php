<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Labels Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used in labels throughout the system.
    | Regardless where it is placed, a label can be listed here so it is easily
    | found in a intuitive way.
    |
    */

    'general' => [
        'all' => 'All',
        'yes' => 'Yes',
        'no' => 'No',
        'copyright' => 'Copyright',
        'custom' => 'Custom',
        'actions' => 'Actions',
        'active' => 'Active',
        'buttons' => [
            'save' => 'Save',
            'update' => 'Update',
        ],
        'hide' => 'Hide',
        'inactive' => 'Inactive',
        'none' => 'None',
        'show' => 'Show',
        'toggle_navigation' => 'Toggle Navigation',
        'create_new' => 'Create New',
        'toolbar_btn_groups' => 'Toolbar with button groups',
        'more' => 'More',
    ],

    'backend' => [
        'access' => [
            'roles' => [
                'create' => 'Create Role',
                'edit' => 'Edit Role',
                'management' => 'Role Management',

                'table' => [
                    'number_of_users' => 'Number of Users',
                    'permissions' => 'Permissions',
                    'role' => 'Role',
                    'sort' => 'Sort',
                    'total' => 'role total|roles total',
                ],
            ],

            'users' => [
                'active' => 'Active Users',
                'all_permissions' => 'All Permissions',
                'change_password' => 'Change Password',
                'change_password_for' => 'Change Password for :user',
                'create' => 'Create User',
                'deactivated' => 'Deactivated Users',
                'deleted' => 'Deleted Users',
                'edit' => 'Edit User',
                'management' => 'User Management',
                'no_permissions' => 'No Permissions',
                'no_roles' => 'No Roles to set.',
                'permissions' => 'Permissions',
                'user_actions' => 'User Actions',

                'table' => [
                    'confirmed' => 'Confirmed',
                    'created' => 'Created',
                    'email' => 'E-mail',
                    'id' => 'ID',
                    'last_updated' => 'Last Updated',
                    'name' => 'Name',
                    'first_name' => 'First Name',
                    'last_name' => 'Last Name',
                    'no_deactivated' => 'No Deactivated Users',
                    'no_deleted' => 'No Deleted Users',
                    'other_permissions' => 'Other Permissions',
                    'permissions' => 'Permissions',
                    'abilities' => 'Abilities',
                    'roles' => 'Roles',
                    'social' => 'Social',
                    'total' => 'user total|users total',
                ],

                'tabs' => [
                    'titles' => [
                        'overview' => 'Overview',
                        'history' => 'History',
                    ],

                    'content' => [
                        'overview' => [
                            'avatar' => 'Avatar',
                            'confirmed' => 'Confirmed',
                            'created_at' => 'Created At',
                            'deleted_at' => 'Deleted At',
                            'email' => 'E-mail',
                            'last_login_at' => 'Last Login At',
                            'last_login_ip' => 'Last Login IP',
                            'last_updated' => 'Last Updated',
                            'name' => 'Name',
                            'first_name' => 'First Name',
                            'last_name' => 'Last Name',
                            'status' => 'Status',
                            'timezone' => 'Timezone',
                        ],
                    ],
                ],

                'view' => 'View User',
            ],
        ],
        'jobs' => [
            'index' => 'Jobs',
            'main' => 'Jobs',
            'create' => 'Create Job',
            'view' => 'View Job',
            'edit' => 'Edit Job',
            'management' => 'Manage Jobs',
            'forms' => [
                'title' => 'Title',
                'is_active' => 'Status',
                'short_description' => 'Short Description',
                'description' => 'Description',
                'page_content' => 'Page Content',
                'started_at' => 'Started At',
                'finished_at' => 'Finished At',
                'company' => 'Company',
                'company_url' => 'Company URL',
            ],
        ],
        'projects' => [
            'index' => 'Projects',
            'main' => 'Projects',
            'create' => 'Create Project',
            'view' => 'View Project',
            'edit' => 'Edit Projects',
            'management' => 'Manage Projects',
            'forms' => [
                'title' => 'Title',
                'is_active' => 'Status',
                'short_description' => 'Short Description',
                'description' => 'Description',
                'page_content' => 'Page Content',
                'started_at' => 'Started At',
                'finished_at' => 'Finished At',
                'youtube_url' => 'Youtube URL',
                'github_url' => 'GitHub URL',
                'images' => 'Images',
            ],
        ],
        'profiles' => [
            'index' => 'Profiles',
            'main' => 'Profiles',
            'create' => 'Create Profile',
            'view' => 'View Profile',
            'edit' => 'Edit Profile',
            'management' => 'Manage Profile',
            'forms' => [
                'title' => 'Title',
                'name' => 'Name',
                'about_title' => 'About Title',
                'short_about_description' => 'Short About Description',
                'about_page_content' => 'About Page Content',
                'is_active' => 'Status',
                'maintenance_mode_active' => 'Maintenance Mode',
                'contact_form_active' => 'Contact Submission',
                'contact_email' => 'Contact Email',
                'resume_download_active' => 'Resume Download',
                'background_video_active' => 'Background Video',
                'resume_file' => 'Resume File',
                'background_video_file' => 'Background Video file',
                'youtube_url' => 'YouTube URL',
                'github_url' => 'GitHub URL',
                'instagram_url' => 'Instagram URL',
            ],
        ],
        'links' => [
            'index' => 'Links',
            'main' => 'Links',
            'create' => 'Create Link',
            'view' => 'View Link',
            'edit' => 'Edit Link',
            'management' => 'Manage Links',
            'forms' => [
                'title' => 'Title',
                'is_active' => 'Status',
                'description' => 'Description',
                'start_date' => 'Start Date',
                'end_date' => 'End Date',
                'start_time' => 'Start Time',
                'end_time' => 'End Time',
                'url' => 'Redirect URL',
                'image' => 'Image',
            ],
        ],
    ],

    'frontend' => [
        'auth' => [
            'login_box_title' => 'Login',
            'login_button' => 'Login',
            'login_with' => 'Login with :social_media',
            'register_box_title' => 'Register',
            'register_button' => 'Register',
            'remember_me' => 'Remember Me',
        ],

        'contact' => [
            'box_title' => 'Contact Us',
            'button' => 'Send Information',
        ],

        'passwords' => [
            'expired_password_box_title' => 'Your password has expired.',
            'forgot_password' => 'Forgot Your Password?',
            'reset_password_box_title' => 'Reset Password',
            'reset_password_button' => 'Reset Password',
            'update_password_button' => 'Update Password',
            'send_password_reset_link_button' => 'Send Password Reset Link',
        ],

        'user' => [
            'passwords' => [
                'change' => 'Change Password',
            ],

            'profile' => [
                'avatar' => 'Avatar',
                'created_at' => 'Created At',
                'edit_information' => 'Edit Information',
                'email' => 'E-mail',
                'last_updated' => 'Last Updated',
                'name' => 'Name',
                'first_name' => 'First Name',
                'last_name' => 'Last Name',
                'update_information' => 'Update Information',
            ],
        ],
    ],
];
