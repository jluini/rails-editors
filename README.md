# rails-editors

Esta aplicación permite testear editores de texto en rails.

## Setup:

- `bundle install`
- `yarn install --check-files`
- `cp config/database.yml.default config/database.yml`
- editar el nombre/username/password de las bases de datos en `config/database.yml`
- `rails db:create`
- `rails db:migrate`
- `rails server`

## Probar templates de GrapesJS

- En la sección **GrapesJS** de la home cliquear *Nuevo documento* (esto crea y persiste un documento en blanco y permite editarlo)
- En la parte inferior se puede importar un template como html; se incluye uno en `templates/mail_invitacion.html`
- Una vez importado debería visualizarse correctamente; cliquear *Guardar*
- Luego se lo puede editar y/o clonar
