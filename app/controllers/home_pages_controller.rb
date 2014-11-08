require 'open-uri'
require 'json'

class HomePagesController < ApplicationController
  def home    
    url_question = 'https://teratail.com/api/questions?limit=10$sort=new'
    html_question = open(url_question).read
    json_question = JSON.parser.new(html_question)
    @result_question = json_question.parse()
    @result_question = @result_question["questions"]


    question_id = []
    url_answer = []
    html_answer = []
    json_answer = []
    @result_answer = []
    @result_question.each.with_index() do |question, index|
      question_id = question["id"].to_s
      url_answer[index] = 'https://teratail.com/api/questions/' + question_id + '/replies' 
      html_answer[index] = open(url_answer[index]).read
      json_answer[index] = JSON.parser.new(html_answer[index])
      @result_answer[index] = json_answer[index].parse()
      @result_answer[index] = @result_answer[index]["replies"][0]
    end
  end
end
