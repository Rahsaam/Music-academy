<template>
    <div class="massage-box" :class="{complete: massage.complete}">
        <div class="massage">
            <h3>{{ massage.email }}</h3>
            <p>{{ massage.detail }}</p>
        </div>
        <div class="icons">
            <router-link :to="{name: 'Edit', params: {id: massage.id}}">
                <i @click="editMassage" class="bi bi-pencil-fill"></i>
            </router-link>
            <i @click="deleteMassage" class="bi bi-trash"></i>
            <i @click="toggleComplete" class="tick bi bi-check2"></i>
        </div>
    </div>
</template>

<script>
export default {
props: ['massage'],
data() {
    return {
        uri: 'http://localhost:3000/massages/' + this.massage.id
    }
},
methods: {
    deleteMassage() {
        fetch(this.uri, { method: 'DELETE' }) 
            .then(() => this.$emit('delete', this.massage.id))
            .catch(err => console.log(err.massage))
    },
    toggleComplete() {
        fetch(this.uri, {
            method: 'PATCH',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({complete: !this.massage.complete})
            })
            .then(() => this.$emit('complete', this.massage.id)) 
    }
}
}
</script>

<style>
    .massage-box {
        max-width: 490px;
        background: #eee;
        padding: 15px 20px;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.09);
        border-radius: 10px;
        margin: 60px auto;
        border-left: 4px solid rgb(236, 0, 79);
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .massage-box h3 {
        padding-bottom: 20px;
    }
    .massage-box .icons i {
        font-size: 20px;
        padding: 0 5px;
        cursor: pointer;
        color: #555;
    }
    .massage-box .icons i:hover {
        color: #999;
    }
    .massage-box.complete {
         border-left: 4px solid rgb(3, 255, 192);
    }
    button.sent-massages {
        border: 0;
        border-radius: 10px;
        color: white;
        background: rgb(11, 247, 215);
        box-shadow: 5px 5px 10px #999;
        padding: 10px;
        margin-top: 30px;
    }
    button:hover{
        color:#000;
        transition: 0.5s;
    }
    .massage-box.complete .tick {
        color: rgb(3, 255, 192);
    }
</style>