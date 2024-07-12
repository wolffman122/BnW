export default function Page() {
    return (
        <div>
            <p>Dashboard Page</p>
            <ul>
                <li><a href="/dashboard/items/add">Add Item</a></li>
                <li><a href="/dashboard/items/delete">Delete Item</a></li>
                <li><a href="/dashboard/items/update">Update Item</a></li>
            </ul>
            <ul>
                <li><a href="/dashboard/user/login">Login User</a></li>
                <li><a href="/dashboard/user/add">Add User</a></li>
                <li><a href="/dashboard/user/delete">Delete User</a></li>
                <li><a href="/dashboard/user/update">Update User</a></li>
            </ul>
            
        </div>
    );
}
