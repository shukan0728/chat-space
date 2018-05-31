json.array! @add_messages do |message|
json.id message.id
json.user_name message.user.name
json.content message.content
json.created_at message.created_at
json.id message.image
end

