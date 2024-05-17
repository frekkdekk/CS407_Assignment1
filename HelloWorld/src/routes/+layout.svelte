<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container-fluid justify-content-center">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link" href="/">Home</a>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Assignments
				</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					<a class="dropdown-item" href="/assignment1">Assignment 1</a>
					<a class="dropdown-item" href="/assignment2">Assignment 2</a>
					<a class="dropdown-item" href="/assignment3">Assignment 3</a>
					<a class="dropdown-item" href="/assignment4">Assignment 4</a>
					<a class="dropdown-item" href="/assignment5">Assignment 5</a>
				</div>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/about">About</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/todo">TODO List</a>
			</li>
		</ul>
		
	</div>
</nav>

<slot />
