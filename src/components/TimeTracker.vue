<template>
    <body>
        <div class="columns">
        <div class="column">
            
        </div>
        <div class="column">
            
        </div>
        <div class="column">
            
        </div>
        <div class="column">
        </div>
        <div class="column">
            <h1>00 : 00 . 000</h1>
            <button class="button is-success"> 
                <i class="fas fa-play"></i>
            </button> &nbsp;

            <button class="button">
                <i class="fas fa-square"></i>
            </button>
        </div>
        </div>

    <b-table
            :data="data"
            :columns="columns"
            :row-class="(row, index) => row.id === 1 && 'is-info'">   
        </b-table>

    </body>
</template>

<script>
export default {
        data() {
            return {
                data: [
                    
                ],
                columns: [
                    {
                      
                    },
                    {
                        field: 'entry_name',
                        label: 'Entry Name',
                    },
                    {
                        field: 'Time',
                        label: 'Time',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    }
                ]
            }
        }
}

</script>

<style>
    h1 {
        text-align: right;
        font-size: 40px
    }

</style>
