# state-odb
[![NPM downloads](https://img.shields.io/npm/dm/state-odb.svg?style=flat-square)](https://www.npmjs.com/package/state-odb)
[![NPM package](https://img.shields.io/npm/v/state-odb.svg?style=flat-square)](https://www.npmjs.com/package/state-odb)

state-odb provides a normalized state and easy object management.

## Why
Having a normalized state is a good strategy if your data is nested in different ways. The redux documentation has a nice explanation [here](http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html).

## How
``` javascript
import db from "./schema";

export const dbReducer = db.combineReducers(
    (session, action) => {
        const { BlogPost, Comment, User } = session;

        switch (action.type) {
            case "POSTS_FETCH_DONE":
            case "POST_FETCH_DONE":
            case "POST_UPDATE":
            case "POST_INSERT":
                // all these actions may be handled using just one statement.
                // the upsert method accepts both single objects and arrays.
                // the payload is automatically normalized and related tables are also updated.

                BlogPost.upsert(action.payload);
                break;

            case "POST_DELETE": {
                const { id } = action.payload;
                const post = BlogPost.get(id);

                post.comments.delete(); // Could be skipped if cascading deletes are defined.
                post.delete();

                // or just, BlogPost.delete( id );
                break;
            }
            case "COMMENT_UPDATE":
            case "COMMENT_INSERT": {
                // assuming payload contains {id,post,author}
                const { post } = action.payload;

                BlogPost.get(post).comments.add(action.payload);
                // or just, Comment.upsert(action.payload);
                break;
            }
            case "COMMENT_DELETE": {
                const { id } = action.payload;
                Comment.delete(id);
                break;
            }
        }
    }
);
```

## Contact / feedback
Feel free to create issues and PR's.

## Dependencies
* none