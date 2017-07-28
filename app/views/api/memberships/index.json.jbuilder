json.array! @memberships do |membership|
  json.partial! 'api/memberships/membership', membership: membership
end
