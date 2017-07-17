# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
info            | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
project_id  | integer   | not null, foreign key (references notebooks), indexed

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
team_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## teams
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
team_name   | string    | not null, indexed, unique
