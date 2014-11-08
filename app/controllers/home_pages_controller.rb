require 'open-uri'
require 'json'

class HomePagesController < ApplicationController
  def home    
    # html = open('https://teratail.com/api/questions?limit=100$sort=new').read
    # json = JSON.parser.new(html)
    # puts json.class
    # @result =  json.parse()
  end
end

