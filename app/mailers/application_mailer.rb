# frozen_string_literal: true

#
# Base application's mailer.
#
class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
end
