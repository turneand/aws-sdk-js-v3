import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { PutImageRequest, PutImageResponse } from "../models/index";
import { deserializeAws_json1_1PutImageCommand, serializeAws_json1_1PutImageCommand } from "../protocols/Aws_json1_1";
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

export type PutImageCommandInput = PutImageRequest;
export type PutImageCommandOutput = PutImageResponse & __MetadataBearer;

export class PutImageCommand extends $Command<PutImageCommandInput, PutImageCommandOutput, ECRClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutImageCommandInput, PutImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: PutImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutImageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutImageCommandOutput> {
    return deserializeAws_json1_1PutImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
