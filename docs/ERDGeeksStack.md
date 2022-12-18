# ERD: Geeks Stack

This document describes the  design  of the  database  for Geeks Stack, a web application that allows users to create and share their own stacks of resources.

## Storage

We'll use a relational database (schema follow) to fast retrieval of posts and comments.
A minimal database implementation such as SQLite is sufficient for our needs.
Although we could use a NoSQL database, we'll use a relational database because it's easier to implement and maintain.
We can switch to something a little more scalable if we need to.
Data will be stored on a serve on  a separate machine  from the web server. backends
up volumes and backups will be handled by the hosting provider.
There will be no replication or sharding of data at the early stages of development.

### Schema

We'll use at least the following entities to implement the service:


**Users**:

| Column | Type | Description |
------------------------------
| ID | Integer | Primary key |

| First/Last Name | String | User's name |

| Email | String | User's email |

| Password | String | User's password |

| Created At | DateTime | Date and time when the user was created |

| Updated At | DateTime | Date and time when the user was last updated |

**Posts**

| Column | Type | Description |
------------------------------
| ID | Integer | Primary key |

| Title | String | Post's title |


| URL | String | Post's URL |

| UserId | Integer | Foreign key to the user who created the post |

| Posted At | DateTime | Date and time when the post was created |

**Likes**

| Column | Type | Description |
------------------------------
| ID | Integer | Primary key |

| UserId | Integer | Foreign key to the user who created the post |

| PostId | Integer | Foreign key to the post that was liked |

| Created At | DateTime | Date and time when the like was created |

**Comments**

| Column | Type | Description |
-----------------------------
| ID | Integer | Primary key |

| UserId | Integer | Foreign key to the user who created the post |

| PostId | Integer | Foreign key to the post that was liked |

| Body | String | Comment's body |

| Created At | DateTime | Date and time when the comment was created |

**Tags**

| Column | Type | Description |
------------------------------
| ID | Integer | Primary key |

| Name | String | Tag's name |

| pasted At | DateTime | Date and time when the tag was created |

**PostTags**

| Column | Type | Description |
------------------------------
| ID | Integer | Primary key |

| PostId | Integer | Foreign key to the post that was liked |

| TagId | Integer | Foreign key to the tag that was liked |

| Created At | DateTime | Date and time when the tag was created |

## Server

An HTTP server will be responsible for authenticating users and serving the web application, serving static assets, and handling API requests.
The server will be written in:

- Node.js
- Express js
- Sequelize to handle the database *ORM*

### Auth 

For v1, a simple JWT-based authentication will be used. with passwords stored in the database as hashes.
Oauth is added to the roadmap for future versions.

### API

**Auth**:
```
POST /sign-in
POST /sign-up
POST /sign-out
```

**Posts**:
```
GET /posts
GET /posts/:id
POST /posts
PUT /posts/:id
DELETE /posts/:id
```

**Likes**:
```
POST /posts/:id/like
DELETE /posts/:id/like
```

**Comments**:
```
GET /posts/:id/comments
POST /posts/:id/comments
PUT /posts/:id/comments/:id
DELETE /posts/:id/comments/:id
```

**Tags**:
```
GET /tags
GET /tags/:id
POST /tags
PUT /tags/:id
DELETE /tags/:id
```

**PostTags**:
```
POST /posts/:id/tags
DELETE /posts/:id/tags
```

## Client

The client will be a single-page application written in React.
The client will be served by the server.
The client will be responsible for rendering the user interface and making API requests to the server.
The client will be written in:

- React
- Redux
- React Router


## Roadmap

- [x] ~~Create a basic server~~

- [x] ~~Create a basic client~~

- [x] ~~Create a basic database~~

- [ ] Add authentication

- [ ] Add Oauth
