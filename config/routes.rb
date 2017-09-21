Rails.application.routes.draw do
  get '/bookings' => 'pages#bookings'
  get '/bookings_data' => 'pages#bookings_data'
  get '/bookings_data_over_time' => 'pages#bookings_data_over_time'
  get '/adjudication' => 'pages#adjudication'
  get '/adjudication_data' => 'pages#adjudication_data'
  get '/population' => 'pages#population'
end
