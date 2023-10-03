let navbar = document.querySelector('#navbar')
navbar.innerHTML = `
<div class="container-fluid">
<a class="navbar-brand text-light" href="/"
    >Desenvolvimento Web Dinâmico</a
>
<button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
>
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
        <li class="nav-item dropdown">
            <a
                class="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Exemplos
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a
                        class="dropdown-item"
                        href="/lista-disciplinas.html"
                        >Lista de Disciplinas</a
                    >
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        href="/posts.html"
                        >Posts</a
                    >
                </li>
                <li>
                <a
                    class="dropdown-item"
                    href="/manipulando-nodelists.html"
                    >Manipulando NodeLists</a
                >
            </li>
            </ul>
        </li>
    </ul>
</div>
</div>
`