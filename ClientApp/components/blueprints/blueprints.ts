import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
    props: {
        'model': Object
    }
})
export default class BlueprintsComponent extends Vue {
    perPage: number = 5;
    currentPage: number = 1;
    filter: any = null;
    pageOptions: Array<any> = [{text: 5, value: 5}, {text: 10, value: 10}, {text: 15, value: 15}];
    fields: Array<any> = [{
        key: 'BuilderClass', sortable: true, class: 'w-100'
    },{
        key: 'Name', sortable: true, class: 'w-25'
    },{
        key: 'RoutingName', sortable: true, class: 'w-100'
    },{
        key: 'ConcurrencyLevel', sortable: true, class: 'w-25'
    },{
        key: 'Errors', sortable: true, class: 'w-25'
    },{
        key: 'In', sortable: true, class: 'w-25'
    },{
        key: 'Out', sortable: true, class: 'w-25'
    },{
        key: 'ProcessingRatePerSec', sortable: true, class: 'w-25', label: 'Units (1/s)'
    }];

    @Prop()
    model: any;

    @Watch('model')
    onModelChanged(value: any, oldValue: any) {

    }

    get totalRows () {
        if (this.model)
            return this.model.blueprints.length;
        return 0;
    }

    onFiltered(filteredItems: Array<any>) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.currentPage = 1;
    }
}
