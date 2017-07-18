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

has_many projects
has_many memberships
has_many users through memberships


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
body        | text      | not null
project_id  | integer   | not null, foreign key (references notebooks), indexed

belongs_to project
