require 'open-uri'
require 'json'

class HomePagesController < ApplicationController
  def home    
    html = open('https://teratail.com/api/questions?limit=100$sort=new').read
    json = JSON.parser.new(html)
    @result = json.parse()
    @result = @result["questions"]
    #@parsed = hash
  end
end
