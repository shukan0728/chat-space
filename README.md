# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false|
|e-mail|varchar|null: false|
|password|varchar|null: false|

### Association
_ has_many :members
_ has_many :groups, through: :members
_ has_many :messages


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false|
|user_id|integre|null: false, foreign_key: true|


### Association
_ has_many :members
_ has_many :users, through: :members
_ has_many :messages



## messageテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|text|text|-|
|image|text|-|

### Association
_ belongs_to :user
_ belongs_to :group






