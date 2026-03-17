const CURRENT_VERSION = document.querySelector('meta[name="version"]').content;

const SAVED_VERSION = localStorage.getItem("version");

if (SAVED_VERSION !== CURRENT_VERSION) {
    console.log("Nouvelle mise à jour, rechargement des fichiers");

    localStorage.setItem("version", CURRENT_VERSION);

    window.location.reload(true);
}
else {
    console.log("Site version " + CURRENT_VERSION);
}