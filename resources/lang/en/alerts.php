<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Alert Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain alert messages for various scenarios
    | during CRUD operations. You are free to modify these language lines
    | according to your application's requirements.
    |
    */

    'backend' => [
        'roles' => [
            'created' => 'The role was successfully created.',
            'deleted' => 'The role was successfully deleted.',
            'updated' => 'The role was successfully updated.',
        ],

        'users' => [
            'cant_resend_confirmation' => 'The application is currently set to manually approve users.',
            'confirmation_email' => 'A new confirmation e-mail has been sent to the address on file.',
            'confirmed' => 'The user was successfully confirmed.',
            'created' => 'The user was successfully created.',
            'deleted' => 'The user was successfully deleted.',
            'deleted_permanently' => 'The user was deleted permanently.',
            'restored' => 'The user was successfully restored.',
            'session_cleared' => "The user's session was successfully cleared.",
            'social_deleted' => 'Social Account Successfully Removed',
            'unconfirmed' => 'The user was successfully un-confirmed',
            'updated' => 'The user was successfully updated.',
            'updated_password' => "The user's password was successfully updated.",
        ],
        'jobs' => [
            'created' => 'The job was successfully created.',
            'deleted' => 'The job was successfully deleted.',
            'updated' => 'The job was successfully updated.',
        ],
        'projects' => [
            'created' => 'The project was successfully created.',
            'deleted' => 'The project was successfully deleted.',
            'updated' => 'The project was successfully updated.',
        ],
        'profiles' => [
            'created' => 'The profile was successfully created.',
            'deleted' => 'The profile was successfully deleted.',
            'delete_failed' => 'Could not delete the Profile.',
            'updated' => 'The profile was successfully updated.',
            'activated' => 'The profile was successfully activated.',
            'activation_failed' => 'The profile failed to activate successfully.',
        ],
        'links' => [
            'created' => 'The link was successfully created.',
            'deleted' => 'The link was successfully deleted.',
            'delete_failed' => 'Could not delete the link.',
            'updated' => 'The link was successfully updated.',
            'activated' => 'The link was successfully toggled.',
            'activation_failed' => 'The link failed to activate successfully.',
        ],
    ],

    'frontend' => [
        'contact' => [
            'sent' => 'Your information was successfully sent. We will respond back to the e-mail provided as soon as we can.',
        ],
    ],
];
