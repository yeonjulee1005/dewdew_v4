type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

interface Database {
  public: {
    Tables: {
      archiveGroup: {
        Row: {
          archive_id: string
          archive_order_id: string
          created_at: string
          deleted: boolean | null
          update_user_id: string | null
          updated_at: string | null
        }
        Insert: {
          archive_id: string
          archive_order_id: string
          created_at?: string
          deleted?: boolean | null
          update_user_id?: string | null
          updated_at?: string | null
        }
        Update: {
          archive_id?: string
          archive_order_id?: string
          created_at?: string
          deleted?: boolean | null
          update_user_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'archiveGroup_archive_id_fkey'
            columns: ['archive_id']
            isOneToOne: false
            referencedRelation: 'archiveImage'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'archiveGroup_archive_order_id_fkey'
            columns: ['archive_order_id']
            isOneToOne: false
            referencedRelation: 'archiveIndex'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'archiveGroup_update_user_id_fkey'
            columns: ['update_user_id']
            isOneToOne: false
            referencedRelation: 'portfolio'
            referencedColumns: ['id']
          },
        ]
      }
      archiveImage: {
        Row: {
          created_at: string
          deleted: boolean | null
          id: string
          title: string | null
          update_user_id: string | null
          updated_at: string | null
          url: string | null
          years: number | null
        }
        Insert: {
          created_at?: string
          deleted?: boolean | null
          id?: string
          title?: string | null
          update_user_id?: string | null
          updated_at?: string | null
          url?: string | null
          years?: number | null
        }
        Update: {
          created_at?: string
          deleted?: boolean | null
          id?: string
          title?: string | null
          update_user_id?: string | null
          updated_at?: string | null
          url?: string | null
          years?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'archiveImage_update_user_id_fkey'
            columns: ['update_user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      archiveIndex: {
        Row: {
          created_at: string
          deleted: boolean | null
          id: string
          index: number | null
          title: string | null
          update_user_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          deleted?: boolean | null
          id?: string
          index?: number | null
          title?: string | null
          update_user_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          deleted?: boolean | null
          id?: string
          index?: number | null
          title?: string | null
          update_user_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'archiveIndex_update_user_id_fkey'
            columns: ['update_user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      orderIndex: {
        Row: {
          category: string | null
          created_at: string
          deleted: boolean | null
          id: string
          index: number | null
          sub_type: string | null
          type: string | null
          update_user_id: string | null
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          deleted?: boolean | null
          id?: string
          index?: number | null
          sub_type?: string | null
          type?: string | null
          update_user_id?: string | null
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          deleted?: boolean | null
          id?: string
          index?: number | null
          sub_type?: string | null
          type?: string | null
          update_user_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'orderIndex_update_user_id_fkey'
            columns: ['update_user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      pageMenu: {
        Row: {
          created_at: string
          deleted: boolean | null
          icon: string | null
          id: string
          image_url: string | null
          menu_type: string | null
          order_id: string | null
          title: string | null
          update_user_id: string | null
          updated_at: string | null
          url: string | null
        }
        Insert: {
          created_at?: string
          deleted?: boolean | null
          icon?: string | null
          id?: string
          image_url?: string | null
          menu_type?: string | null
          order_id?: string | null
          title?: string | null
          update_user_id?: string | null
          updated_at?: string | null
          url?: string | null
        }
        Update: {
          created_at?: string
          deleted?: boolean | null
          icon?: string | null
          id?: string
          image_url?: string | null
          menu_type?: string | null
          order_id?: string | null
          title?: string | null
          update_user_id?: string | null
          updated_at?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'pageMenu_order_id_fkey'
            columns: ['order_id']
            isOneToOne: false
            referencedRelation: 'orderIndex'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'pageMenu_update_user_id_fkey'
            columns: ['update_user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      portfolio: {
        Row: {
          alt: string | null
          created_at: string | null
          deleted: boolean | null
          description: string | null
          dynamic_thumbnail: string | null
          id: string
          image: string | null
          order_id: string | null
          thumbnail: string | null
          title: string | null
          update_user_id: string | null
          updated_at: string | null
          url: string | null
        }
        Insert: {
          alt?: string | null
          created_at?: string | null
          deleted?: boolean | null
          description?: string | null
          dynamic_thumbnail?: string | null
          id?: string
          image?: string | null
          order_id?: string | null
          thumbnail?: string | null
          title?: string | null
          update_user_id?: string | null
          updated_at?: string | null
          url?: string | null
        }
        Update: {
          alt?: string | null
          created_at?: string | null
          deleted?: boolean | null
          description?: string | null
          dynamic_thumbnail?: string | null
          id?: string
          image?: string | null
          order_id?: string | null
          thumbnail?: string | null
          title?: string | null
          update_user_id?: string | null
          updated_at?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'portfolio_description_fkey'
            columns: ['description']
            isOneToOne: false
            referencedRelation: 'textDescription'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'portfolio_order_id_fkey'
            columns: ['order_id']
            isOneToOne: false
            referencedRelation: 'orderIndex'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'portfolio_title_fkey'
            columns: ['title']
            isOneToOne: false
            referencedRelation: 'textTitle'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'portfolio_update_user_id_fkey'
            columns: ['update_user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      profiles: {
        Row: {
          admin: boolean | null
          avatar_url: string | null
          created_at: string | null
          deleted: boolean | null
          full_name: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          admin?: boolean | null
          avatar_url?: string | null
          created_at?: string | null
          deleted?: boolean | null
          full_name?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          admin?: boolean | null
          avatar_url?: string | null
          created_at?: string | null
          deleted?: boolean | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      stackLogo: {
        Row: {
          created_at: string
          deleted: boolean | null
          id: string
          index: number | null
          order_id: string | null
          title: string | null
          update_user_id: string | null
          updated_at: string | null
          url: string | null
        }
        Insert: {
          created_at?: string
          deleted?: boolean | null
          id?: string
          index?: number | null
          order_id?: string | null
          title?: string | null
          update_user_id?: string | null
          updated_at?: string | null
          url?: string | null
        }
        Update: {
          created_at?: string
          deleted?: boolean | null
          id?: string
          index?: number | null
          order_id?: string | null
          title?: string | null
          update_user_id?: string | null
          updated_at?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'stackLogo_order_id_fkey'
            columns: ['order_id']
            isOneToOne: false
            referencedRelation: 'orderIndex'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'stackLogo_update_user_id_fkey'
            columns: ['update_user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      tech: {
        Row: {
          created_at: string
          deleted: boolean | null
          desc: string | null
          id: string
          like: number | null
          raw_article: string | null
          tags: string | null
          title: string | null
          update_user_id: string | null
          updated_at: string | null
          view_count: number | null
        }
        Insert: {
          created_at?: string
          deleted?: boolean | null
          desc?: string | null
          id?: string
          like?: number | null
          raw_article?: string | null
          tags?: string | null
          title?: string | null
          update_user_id?: string | null
          updated_at?: string | null
          view_count?: number | null
        }
        Update: {
          created_at?: string
          deleted?: boolean | null
          desc?: string | null
          id?: string
          like?: number | null
          raw_article?: string | null
          tags?: string | null
          title?: string | null
          update_user_id?: string | null
          updated_at?: string | null
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'tech_update_user_id_fkey'
            columns: ['update_user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      techComment: {
        Row: {
          created_at: string
          deleted: boolean | null
          id: string
          message: string | null
          name: string | null
          password: string | null
          tech_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          deleted?: boolean | null
          id?: string
          message?: string | null
          name?: string | null
          password?: string | null
          tech_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          deleted?: boolean | null
          id?: string
          message?: string | null
          name?: string | null
          password?: string | null
          tech_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'techComment_tech_id_fkey'
            columns: ['tech_id']
            isOneToOne: false
            referencedRelation: 'tech'
            referencedColumns: ['id']
          },
        ]
      }
      textDescription: {
        Row: {
          category: string | null
          created_at: string
          deleted: boolean | null
          en: string | null
          id: string
          index: number | null
          ko: string | null
          type: string | null
          update_user_id: string | null
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          deleted?: boolean | null
          en?: string | null
          id?: string
          index?: number | null
          ko?: string | null
          type?: string | null
          update_user_id?: string | null
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          deleted?: boolean | null
          en?: string | null
          id?: string
          index?: number | null
          ko?: string | null
          type?: string | null
          update_user_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'textDescription_update_user_id_fkey'
            columns: ['update_user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      textTitle: {
        Row: {
          category: string | null
          created_at: string
          deleted: boolean | null
          en: string | null
          id: string
          index: number | null
          ko: string | null
          type: string | null
          update_user_id: string | null
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          deleted?: boolean | null
          en?: string | null
          id?: string
          index?: number | null
          ko?: string | null
          type?: string | null
          update_user_id?: string | null
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          deleted?: boolean | null
          en?: string | null
          id?: string
          index?: number | null
          ko?: string | null
          type?: string | null
          update_user_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'textTitle_update_user_id_fkey'
            columns: ['update_user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

type Tables<
  PublicTableNameOrOptions extends
  | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
    Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
      ? R
      : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
    PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
      PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
        ? R
        : never
    : never

type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof PublicSchema['Tables']
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
    Insert: infer I
  }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
      ? I
      : never
    : never

type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof PublicSchema['Tables']
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
    Update: infer U
  }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U
    }
      ? U
      : never
    : never

type Enums<
  PublicEnumNameOrOptions extends
  | keyof PublicSchema['Enums']
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never

type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
  | keyof PublicSchema['CompositeTypes']
  | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never
