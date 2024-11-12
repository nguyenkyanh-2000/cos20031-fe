// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ANY = any;

export interface paths {
  "/api/users": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["UserController_getUsers"];
    put?: never;
    post: operations["UserController_createUser"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/users/{userId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["UserController_getUserById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/product-category": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["ProductCategoryController_createProductCategory"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/product": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["ProductController_createProduct"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/genkit/customer-service": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["GenkitController_handleCustomerService"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/genkit/customer-service/{userId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["GenkitController_getCustomerServiceChatSessionHistory"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    UserOutput: {
      /** Format: date-time */
      createdAt: string;
      email: string;
      normalizedEmail: string;
      name: string;
      phone: string;
      address: string;
    };
    CreateUserInput: {
      email: string;
      password: string;
      name: string;
      phone: string;
      address: string;
    };
    PaginationMetadata: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
      hasPrevPage: boolean;
      hasNextPage: boolean;
    };
    GetUsersOutput: {
      users: components["schemas"]["UserOutput"][];
      metadata: components["schemas"]["PaginationMetadata"];
    };
    CreateProductCategoryInput: {
      name: string;
      description: string;
    };
    CreateProductInput: {
      brand: string;
      name: string;
      description: string;
      productCategoryId: string;
      businessId: string;
    };
    GenkitHistoryItem: {
      id: string;
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
      chatSessionId: string;
      /** @enum {string} */
      role: "USER" | "SYSTEM" | "MODEL" | "TOOL";
      content: Record<string, never>[];
    };
    GenkitSessionOutput: {
      answer: string;
      history: components["schemas"]["GenkitHistoryItem"][];
    };
    GenkitSessionInput: {
      query: string;
      userId: string;
    };
    GenkitSessionHistoryOutput: {
      history: components["schemas"]["GenkitHistoryItem"][];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  UserController_getUsers: {
    parameters: {
      query?: {
        page?: number;
        limit?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            message?: string;
            /** @default 200 */
            statusCode: number;
            data?: components["schemas"]["GetUsersOutput"];
          };
        };
      };
      /** @description One of the inputs is invalid */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            message?: string;
            statusCode?: number;
            error?: string;
          };
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            message?: string;
            statusCode?: number;
            error?: string;
          };
        };
      };
    };
  };
  UserController_createUser: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateUserInput"];
      };
    };
    responses: {
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            message?: string;
            /** @default 201 */
            statusCode: number;
            data?: components["schemas"]["UserOutput"];
          };
        };
      };
      /** @description One of the inputs is invalid */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            message?: string;
            statusCode?: number;
            error?: string;
          };
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            message?: string;
            statusCode?: number;
            error?: string;
          };
        };
      };
    };
  };
  UserController_getUserById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        userId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            message?: string;
            /** @default 200 */
            statusCode: number;
            data?: components["schemas"]["UserOutput"];
          };
        };
      };
      /** @description The user ID is invalid */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            message?: string;
            statusCode?: number;
            error?: string;
          };
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            message?: string;
            statusCode?: number;
            error?: string;
          };
        };
      };
    };
  };
  ProductCategoryController_createProductCategory: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateProductCategoryInput"];
      };
    };
    responses: {
      201: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ProductController_createProduct: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateProductInput"];
      };
    };
    responses: {
      201: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  GenkitController_handleCustomerService: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["GenkitSessionInput"];
      };
    };
    responses: {
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            message?: string;
            /** @default 201 */
            statusCode: number;
            data?: components["schemas"]["GenkitSessionOutput"];
          };
        };
      };
    };
  };
  GenkitController_getCustomerServiceChatSessionHistory: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        userId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            message?: string;
            /** @default 200 */
            statusCode: number;
            data?: components["schemas"]["GenkitSessionHistoryOutput"];
          };
        };
      };
    };
  };
}
