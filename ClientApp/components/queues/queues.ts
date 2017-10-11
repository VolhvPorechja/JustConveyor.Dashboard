import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
    props: {
        'model': Object
    }
})

export default class QueueseComponent extends Vue {
    perPage: number = 5;
    currentPage: number = 1;
    filter: any = null;
    pageOptions: Array<any> = [{text: 5, value: 5}, {text: 10, value: 10}, {text: 15, value: 15}];

    fields: Array<any> = [{
        key: 'QueueType', sortable: true, class: 'w-100'
    },{
        key: 'Blueprint', sortable: true, class: 'w-100'
    },{
        key: 'OnQueue', sortable: true, class: 'w-25'
    },{
        key: 'OnQueuePrevious', sortable: true, class: 'w-25'
    },{
        key: 'OnQueueDelta', sortable: true, class: 'w-25', label: 'Delta'
    }];
    @Prop()
    model: any;

    @Watch('model')
    onModelChanged(value: any, oldValue: any) {

    }

    get totalRows () {
        if (this.model)
            return this.model.queues.length;
        return 0;
    }
}
