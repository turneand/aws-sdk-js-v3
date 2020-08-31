import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DeleteExpressionRequest, DeleteExpressionResponse } from "../models/index";
import {
  deserializeAws_queryDeleteExpressionCommand,
  serializeAws_queryDeleteExpressionCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DeleteExpressionCommandInput = DeleteExpressionRequest;
export type DeleteExpressionCommandOutput = DeleteExpressionResponse & __MetadataBearer;

export class DeleteExpressionCommand extends $Command<
  DeleteExpressionCommandInput,
  DeleteExpressionCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteExpressionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteExpressionCommandInput, DeleteExpressionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteExpressionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteExpressionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteExpressionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteExpressionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteExpressionCommandOutput> {
    return deserializeAws_queryDeleteExpressionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
