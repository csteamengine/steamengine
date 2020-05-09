@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.about'))

@push('before-styles')
{{--    {{ style(mix('css/index.css')) }}--}}
@endpush

@section('content')
    <div class="row mt-5">
        <div class="col mt-5">
            <div class="row">
                <div class="col-4 m-auto about-image">
                    <img src="{{asset('storage/'.$active_profile->about_image()->small_url)}}" class="img-fluid">
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-4 m-auto text-center">
                    <h2>Charlie Steenhagen</h2>
                </div>
            </div>
            {!! $active_profile->about_page_content !!}
            <div class="row mt-5">
                <div class="col m-auto text-center">
                    <h2>A Look Into My Life</h2>
                </div>
            </div>
            <div class="row mt-5 mb-5">
                <div class="col-12 col-sm-10 m-auto">
                    <div class="row mb-5">
                        @foreach($active_profile->images()->get() as $image)
                            <div class="col-4 col-lg-3 m-auto">
                                <img class="w-100 m-3" src="{{asset('/storage/'.$image->small_url)}}">
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('after-scripts')
{{--    <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js"></script>--}}
{{--    {{script('js/index.js')}}--}}
@endpush
