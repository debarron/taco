$(document).ready(function() {
var data = {
    operators: {
      },
      links: {
      }
};

// Apply the plugin on a standard, empty div...
var $flowchart = $('#model-container');
$flowchart.flowchart({
    data: data
});


// Input Layer structure
var input_operator_id = 1;
$('.add_input_layer').click(function() {
    var operatorId = 'input_layer' + input_operator_id;
    var operatorData = {
    top: 60,
    left: 500,
    properties: {
        title: 'input_layer_' + (input_operator_id ),
        inputs: {
        },
        outputs: {
        outs: {
            label: 'ouput (:i)',
            multiple: true
        }
        },
        input_shape: '(32,32,1)'
    },
    };
    input_operator_id++;
    $flowchart.flowchart('createOperator', operatorId, operatorData);
});

// Dense Layer structure
var dense_operator_id = 1;
$('.add_dense_layer').click(function() {
    var operatorId = 'dense_layer' + dense_operator_id;
    var operatorData = {
    top: 60,
    left: 500,
    properties: {
        title: 'dense_layer_' + (dense_operator_id ),
        inputs: {
        input_1: {
            label: 'Input',
        }
        },
        outputs: {
        output_1: {
            label: 'Output',
        }
        },
        output_shape: 64,
    }
    };
    
    dense_operator_id++;
    
    $flowchart.flowchart('createOperator', operatorId, operatorData);
});

// Activation Layer structure
var activation_operator_id = 1;
$('.add_activation_layer').click(function() {
    var operatorId = 'activation_layer' + activation_operator_id;
    var operatorData = {
    top: 60,
    left: 500,
    properties: {
        title: 'activation_layer_' + (activation_operator_id ),
        inputs: {
        input_1: {
            label: 'Input',
        }
        },
        outputs: {
        output_1: {
            label: 'Output',
        }
        }
    }
    };
    
    activation_operator_id++;
    
    $flowchart.flowchart('createOperator', operatorId, operatorData);
});

// 2D Conv Layer structure
var conv2d_operator_id = 1;
$('.add_conv2d_layer').click(function() {
    var operatorId = 'conv2d_layer' + conv2d_operator_id;
    var operatorData = {
    top: 60,
    left: 500,
    properties: {
        title: 'conv2d_layer_' + (conv2d_operator_id ),
        inputs: {
        input_1: {
            label: 'Input',
        }
        },
        outputs: {
        output_1: {
            label: 'Output',
        }
        },
        kernel_shape: '(3,3)',
        num_kernels: 32,
    }
    };
    
    conv2d_operator_id++;
    
    $flowchart.flowchart('createOperator', operatorId, operatorData);
});

$('.delete_selected_button').click(function() {
    $flowchart.flowchart('deleteSelected');
});

$('.get_data').click(function() {
    var data = $flowchart.flowchart('getData');
    alert(JSON.stringify(data))
});

});