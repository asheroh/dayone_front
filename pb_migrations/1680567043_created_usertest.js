migrate((db) => {
  const collection = new Collection({
    "id": "wvz42iubcqnqemw",
    "created": "2023-04-04 00:10:43.299Z",
    "updated": "2023-04-04 00:10:43.299Z",
    "name": "usertest",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nnguqyai",
        "name": "access_token",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "htquuhvc",
        "name": "refresh_token",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wvz42iubcqnqemw");

  return dao.deleteCollection(collection);
})
