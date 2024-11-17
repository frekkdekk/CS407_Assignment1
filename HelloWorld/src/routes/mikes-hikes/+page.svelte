<script>
    export let data
    console.log(data)
    const { hikes } = data.props
</script>

<p class="display-5 text-center">Mike's Hikes</p>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Location</th>
                        <th scope="col">Name</th>
                        <th scope="col">Trail</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {#each hikes as hike}
                        <tr>
                            <td>{hike.location}</td>
                            <td>{hike.name}</td>
                            <td>{hike.trail}</td>
                            <td>{hike.date}</td>
                            <td><a href="/mikes-hikes/{hike.id}">View</a></td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>

<style>
    .table {
        margin-top: 20px;
        min-width: 800px;
    }
</style>