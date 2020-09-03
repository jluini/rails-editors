# rails-editors

Esta aplicación permite testear editores de texto en rails.

## Setup:

- `bundle install`
- `yarn install --check-files`
- `cp config/database.yml.default config/database.yml`
- editar el nombre/username/password de las bases de datos en `config/database.yml`
- `rails db:create db:migrate db:seed`
- `rails server`

## Probar templates de GrapesJS

- En la sección **GrapesJS** de la home ir a *Todos los documentos* y se verá un template ya creado como semilla
- Se lo puede editar, visualizar o clonar
