@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.projects.index'))

@push('before-styles')
{{--    {{ style(mix('css/index.css')) }}--}}
@endpush

@section('content')
    <h1>Projects</h1>
@endsection

@push('after-scripts')
{{--    <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js"></script>--}}
{{--    {{script('js/index.js')}}--}}
@endpush
