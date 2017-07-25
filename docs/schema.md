# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
info            | string    | allow null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

has_many memberships
has_many teams through memberships
has_many teams (that xe owns)

## memberships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
team_id     | integer   | not null, foreign key (references users), indexed
user_id     | integer   | not null, foreign key (references users), indexed

belongs_to team
belongs_to user


## teams
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
team_name   | string    | not null, indexed, unique
owner_id    | integer   | not null, indexed, unique

(which is the owner)
(So teams belong to a single user, who in turn owns them, there is no "organization" that owns all the particular teams)
belongs_to owner
has_many projects
has_many memberships
has_many members through memberships source user


## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
team_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

belongs_to team


## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
details     | text      | not null
project_id  | integer   | not null, foreign key (references notebooks), indexed

belongs_to project
